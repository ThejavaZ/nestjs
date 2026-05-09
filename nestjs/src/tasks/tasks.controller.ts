import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

//@Controller({})
@Controller('/task')
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getAllTask() {
    return this.tasksService.getTasks();
  }

  @Get()
  getTaskById() {
    return this.tasksService.getById();
  }

  @Post()
  createTask() {
    return this.tasksService.createTask();
  }

  @Put()
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Patch()
  patchTask() {
    return this.tasksService.patchTask();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
}
