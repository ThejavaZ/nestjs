import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  getTasks(): object {
    return ['tasks1', 'tasks1', 'tasks1'];
  }

  getById(): User {
    return {
      name: 'Jon Doe',
      age: 30,
    };
  }

  createTask() {
    return 'Creando tarea';
  }

  updateTask() {
    return 'Actualizando tarea';
  }

  deleteTask() {
    return 'Elimiminando tarea';
  }

  patchTask() {
    return 'Actualizando el estado de una tarea';
  }
}
