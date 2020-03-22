import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

/**
 * The controller handles the HTTP requests and returns the response.
 * The service handles the business logic.
 */
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  // createTask(@Body() body): Task {
  //  console.log('body: ', body); // one way to extract params is to get the whole body
  // ******************************* OR
  // createTask(
  //   @Body('title' /* name of the key in the body */) title: string,
  //   @Body('description') description: string,
  // ): Task {
  // ******************************* OR, using DTOs
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
