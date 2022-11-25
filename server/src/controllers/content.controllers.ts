import Express from "express";
import articles from "../../data/articles.json";
import rankings from "../../data/rankings.json";
import collections from "../../data/collections.json";

interface Props {
  req: Express.Request;
  res: Express.Response;
}

// Get all users
export const articlesGet = async ({ res }: Props) => {
  try {
    res.json(articles);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Rankings
export const rankingsGet = async ({ res }: Props) => {
  try {
    res.json(rankings);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Collections
export const collectionsGet = async ({ res }: Props) => {
  try {
    res.json(collections);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
