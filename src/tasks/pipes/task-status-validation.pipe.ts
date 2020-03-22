import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  
  // transform(value: any, metadata: ArgumentMetadata) { // transform also takes an ArgumentMetadata argument
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      // BadRequestException is an 400 error
      throw new BadRequestException(`${value} is an invalid status`)
    }

    return value;
  }

  private isStatusValid(status: any): boolean {
    const index = this.allowedStatuses.indexOf(status);  
    return index !== -1;
  }
}