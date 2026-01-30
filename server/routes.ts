import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.items.list.path, async (req, res) => {
    const items = await storage.getItems();
    res.json(items);
  });

  app.get(api.items.get.path, async (req, res) => {
    const item = await storage.getItem(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  });

  app.post(api.items.create.path, async (req, res) => {
    try {
      const input = api.items.create.input.parse(req.body);
      const item = await storage.createItem(input);
      res.status(201).json(item);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  const existingItems = await storage.getItems();
  if (existingItems.length === 0) {
    await storage.createItem({
      title: "Complete Assignment",
      description: "Finish the mobile app dev assignment",
      fullDetails: "Implement List, Detail, and Create screens using React and Node.js. Ensure clean code and proper error handling.",
      category: "Work"
    });
    await storage.createItem({
      title: "Buy Groceries",
      description: "Milk, Bread, Eggs, Coffee",
      fullDetails: "Need to stop by the store on the way home. Also check for fresh fruits.",
      category: "Personal"
    });
    await storage.createItem({
      title: "Team Meeting",
      description: "Daily standup at 10 AM",
      fullDetails: "Discuss progress on the current sprint and any blockers.",
      category: "Work"
    });
    await storage.createItem({
      title: "Car Service",
      description: "Schedule maintenance",
      fullDetails: "Call the service center and book an appointment for next Tuesday.",
      category: "Urgent"
    });
  }

  return httpServer;
}
