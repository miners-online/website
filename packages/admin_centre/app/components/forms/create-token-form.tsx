import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "~/hooks/use-toast"
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Separator } from "~/components/ui/separator"
import { Checkbox } from "~/components/ui/checkbox"
import MultipleSelector, { Option } from "~/components/ui/multi-select"

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const statistic_modes = [
  {
    id: "read",
    label: "Read",
  },
  {
    id: "write",
    label: "Write",
  },
  {
    id: "delete",
    label: "Delete",
  },
] as const

const FormSchema = z.object({
  token_name: z.string().min(1, {
    message: "Token name must not be empty.",
  }),
  scope: z.enum(["all_games", "selected_games"], {
    required_error: "You need to select a game access scope.",
  }),
  games: z.array(optionSchema).optional(),
  statistic_mode: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one statistics access mode item.",
  }),
})

export function CreateTokenForm({ gameOptions }: { gameOptions: Option[] }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token_name: "",
      scope: "selected_games",
      statistic_mode: ["read"]
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="token_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token name</FormLabel>
              <FormControl>
                <Input placeholder="Example token name" {...field} />
              </FormControl>
              <FormDescription>
                This is your token's display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator/>
        <FormField
          control={form.control}
          name="scope"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Game access</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all_games" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      <p>All games</p>
                      <p>This applies to all current and future games.</p>
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="selected_games" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      <p>Only select games</p> 
                      <p>Select at least one game.</p>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="games"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <MultipleSelector
                  {...field}
                  defaultOptions={gameOptions}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator/>
        <FormField
          control={form.control}
          name="statistic_mode"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Statistics access</FormLabel>
                <FormDescription>
                  Select the how you want to access game statistics.
                </FormDescription>
              </div>
              {statistic_modes.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="statistic_mode"
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
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
