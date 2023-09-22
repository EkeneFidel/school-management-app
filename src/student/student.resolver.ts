import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver()
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query(() => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query(() => [StudentType])
  async students() {
    return this.studentService.getAllStudents();
  }
}
