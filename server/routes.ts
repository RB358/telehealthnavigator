import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Get all providers
  app.get("/api/providers", async (_req, res) => {
    try {
      const providers = await storage.getAllProviders();
      res.json(providers);
    } catch (error) {
      console.error("Error fetching providers:", error);
      res.status(500).json({ error: "Failed to fetch providers" });
    }
  });

  // Get single provider by slug
  app.get("/api/providers/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const provider = await storage.getProviderBySlug(slug);
      
      if (!provider) {
        return res.status(404).json({ error: "Provider not found" });
      }
      
      res.json(provider);
    } catch (error) {
      console.error("Error fetching provider:", error);
      res.status(500).json({ error: "Failed to fetch provider" });
    }
  });

  return httpServer;
}
