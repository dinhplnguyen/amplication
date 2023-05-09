import { Module } from "@nestjs/common";
import { HabitModuleBase } from "./base/habit.module.base";
import { HabitService } from "./habit.service";
import { HabitController } from "./habit.controller";
import { HabitResolver } from "./habit.resolver";

@Module({
  imports: [HabitModuleBase],
  controllers: [HabitController],
  providers: [HabitService, HabitResolver],
  exports: [HabitService],
})
export class HabitModule {}
