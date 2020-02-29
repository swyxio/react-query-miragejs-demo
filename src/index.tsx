import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Server, Model } from 'miragejs';
import { BrowserRouter as Router } from 'react-router-dom';

// type ServerType = Record<string, ModelInstance<{text: string, [key: string]: string}>>
// new Server<ServerType>({
new Server({
    models: {
      todo: Model
    },
    seeds(server) {
      server.create('todo', { text: 'Learn Mirage' } as any);
      server.create('todo', { text: 'Shake it off', isDone: true } as any);
      server.create('todo', { text: 'Profit' } as any);
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      // Movies example
      this.get('/movies', () => {
        return [
          { id: 1, name: 'Inception', year: 2010 },
          { id: 2, name: 'Interstellar', year: 2014 },
          { id: 3, name: 'Dunkirk', year: 2017 }
        ];
      });

      // Todos example
      this.get('/todos', (schema: any) => {
        return schema.todos.all(); // persistent even after navigating away
      });
      this.post('/todos', (schema: any, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.todos.create(attrs);
      });
      this.patch('/todos/:id', (schema, request) => {
        let todo = JSON.parse(request.requestBody);
        return schema.db.todos.update(todo.id, todo);
      });
    }
  });

ReactDOM.render(
  <Router><App /></Router>, document.getElementById("app"));
