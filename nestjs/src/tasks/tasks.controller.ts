import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { CreateTaskDTO } from './dto/create-task.dto';
import type { UpdateTaskDTO } from './dto/update-task.dto.';

//@Controller({})
@Controller('/task')
export class TasksController {
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getAllTask(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDTO) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDTO) {
    return this.tasksService.updateTask(task);
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
