'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getFlavorRecommendations } from '@/ai/flows/flavor-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { gumFlavors } from '@/lib/mock-data';
import Icon from './icon';

const flavorProfiles = [
  { id: 'sweet', label: 'Sweet' },
  { id: 'minty', label: 'Minty' },
  { id: 'sour', label: 'Sour' },
  { id: 'fruity', label: 'Fruity' },
  { id: 'spicy', label: 'Spicy' },
];

const recommendationSchema = z.object({
  pastPurchases: z.string().min(3, {
    message: 'Tell us about at least one flavor you liked.',
  }),
  flavorProfiles: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one flavor profile.',
  }),
});

type RecommendationFormValues = z.infer<typeof recommendationSchema>;

export function RecommendationsClient() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema),
    defaultValues: {
      pastPurchases: 'I really liked the Polar Ice and Sweet Watermelon.',
      flavorProfiles: ['sweet', 'minty'],
    },
  });

  async function onSubmit(data: RecommendationFormValues) {
    setLoading(true);
    setRecommendations([]);
    try {
      const result = await getFlavorRecommendations({
        pastPurchases: data.pastPurchases.split(',').map((s) => s.trim()),
        flavorProfiles: data.flavorProfiles,
      });
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
      // You could use react-hot-toast here to show an error
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="font-headline">Your Flavor Profile</CardTitle>
            <CardDescription>Fill out your preferences below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="pastPurchases"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Past Purchases or Liked Flavors</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Polar Ice, Sweet Watermelon" {...field} />
                  </FormControl>
                  <FormDescription>
                    List some gum flavors you've enjoyed in the past.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="flavorProfiles"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Preferred Flavor Profiles</FormLabel>
                    <FormDescription>
                      Select all the profiles that you generally enjoy.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                  {flavorProfiles.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="flavorProfiles"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col items-start space-y-4">
            <Button type="submit" disabled={loading} className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Recommendations
                </>
              )}
            </Button>
            
            {recommendations.length > 0 && (
              <div className="w-full pt-4">
                <h3 className="text-lg font-headline font-semibold mb-2">Here are your AI-powered picks:</h3>
                <div className="flex flex-wrap gap-2">
                  {recommendations.map((rec, index) => {
                    const flavorExists = gumFlavors.find(f => f.name.toLowerCase() === rec.toLowerCase());
                    return (
                        <Badge key={index} variant="default" className="text-base px-4 py-2 bg-primary text-primary-foreground">
                            {flavorExists && <Icon name={flavorExists.iconName} className="mr-2 h-4 w-4" />}
                            {rec}
                        </Badge>
                    )
                  })}
                </div>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
