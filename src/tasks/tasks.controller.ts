import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

/**
 * The controller handles the HTTP requests and returns the response.
 * The service handles the business logic.
 */
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
