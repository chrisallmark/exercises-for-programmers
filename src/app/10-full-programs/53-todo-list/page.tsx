"use client";

import { Solution } from "@/components";
import markdown from "@/exercises/10-full-programs/53-todo-list.md";
import { useEffect, useState } from "react";
import { Button, Grid, Input, List } from "semantic-ui-react";

const STORAGE_KEY = "efp-todo-list";

type Task = { id: number; text: string };

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setTasks(stored ? JSON.parse(stored) : []);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, mounted]);

  const addTask = () => {
    const text = input.trim();
    if (!text) return;
    setTasks((prev) => [...prev, { id: Date.now(), text }]);
    setInput("");
  };

  const removeTask = (id: number) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <Solution category="Full Programs" exercise="Todo List"
      markdown={markdown}
    >
      <Grid stackable>
        <Grid.Column width={12}>
          <Input
            fluid
            placeholder="Enter a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent) => { if (e.key === "Enter") addTask(); }}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button primary fluid disabled={!input.trim()} onClick={addTask}>
            Add Task
          </Button>
        </Grid.Column>
        <Grid.Column width={16}>
          {tasks.length === 0 ? (
            <p style={{ color: "#999" }}>No tasks yet. Add one above.</p>
          ) : (
            <List divided relaxed>
              {tasks.map((task) => (
                <List.Item key={task.id}>
                  <List.Content floated="right">
                    <Button size="small" negative onClick={() => removeTask(task.id)}>
                      Complete
                    </Button>
                  </List.Content>
                  <List.Content>
                    <List.Description style={{ lineHeight: "2.2em" }}>{task.text}</List.Description>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          )}
        </Grid.Column>
      </Grid>
    </Solution>
  );
};

export default TodoList;
