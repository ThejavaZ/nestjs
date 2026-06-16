import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto.';

export interface Task {
  id: number;
  title: string;
  status: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks(): any {
    return this.tasks.map(() => {});
  }

  getTask(id: number): Task {
    const taskFount = this.tasks.find((task: Task) => task.id === id);

    if (!taskFount) {
      return new NotFoundException(`Tarea con el id: ${id} no encontrada`);
    }

    return taskFount;
  }

  createTask(task: CreateTaskDTO) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDTO) {
    console.log(task);
    return 'Actualizando tarea';
  }

  deleteTask() {
    return 'Elimiminando tarea';
  }

  patchTask() {
    return 'Actualizando el estado de una tarea';
  }
}
