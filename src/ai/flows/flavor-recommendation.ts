'use server';

/**
 * @fileOverview An AI agent that provides flavor recommendations based on past purchases and flavor profiles.
 *
 * - getFlavorRecommendations - A function that generates flavor recommendations.
 * - FlavorRecommendationInput - The input type for the getFlavorRecommendations function.
 * - FlavorRecommendationOutput - The return type for the getFlavorRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FlavorRecommendationInputSchema = z.object({
  pastPurchases: z
    .array(z.string())
    .describe('An array of gum flavors the user has purchased in the past.'),
  flavorProfiles: z
    .array(z.string())
    .describe('An array of flavor profiles the user enjoys (e.g., sweet, minty, sour).'),
});
export type FlavorRecommendationInput = z.infer<typeof FlavorRecommendationInputSchema>;

const FlavorRecommendationOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of recommended gum flavors based on past purchases and flavor profiles.'),
});
export type FlavorRecommendationOutput = z.infer<typeof FlavorRecommendationOutputSchema>;

export async function getFlavorRecommendations(input: FlavorRecommendationInput): Promise<FlavorRecommendationOutput> {
  return flavorRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'flavorRecommendationPrompt',
  input: {schema: FlavorRecommendationInputSchema},
  output: {schema: FlavorRecommendationOutputSchema},
  prompt: `You are a gum flavor recommendation expert.

  Based on the user's past purchases and preferred flavor profiles, recommend new gum flavors they might enjoy.

  Past Purchases: {{pastPurchases}}
  Flavor Profiles: {{flavorProfiles}}

  Recommendations:`,
});

const flavorRecommendationFlow = ai.defineFlow(
  {
    name: 'flavorRecommendationFlow',
    inputSchema: FlavorRecommendationInputSchema,
    outputSchema: FlavorRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
