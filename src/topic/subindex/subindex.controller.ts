import { Controller, Get } from '@nestjs/common';
import { TopicService } from './subindex.service';

@Controller("/topic")
export class  TopicController {
  constructor(private readonly indexService: TopicService) {}

  @Get("/")
  applications(): string {
    return this.indexService.applications();
  }

  @Get("/chess")
  chess(): string {
    return this.indexService.chess();
  }

  @Get("/calculator")
  calculator(): string {
    return this.indexService.calculator();
  }

    @Get("/maze")
  maze(): string {
    return this.indexService.maze();
  }

  @Get("/sass_")
  sass_(): string {
    return this.indexService.sass_();
  }

  @Get("/codepen")
  codepen(): string {
    return this.indexService.codepen();
  }

    @Get("/tilt_maze")
  tilt_maze(): string {
    return this.indexService.tilt_maze();
  }

  @Get("/dino")
  dino(): string {
    return this.indexService.dino();
  }

    @Get("/solitaire")
  solitaire(): string {
    return this.indexService.solitaire();
  }

  @Get("/sudoku")
  sudoku(): string {
    return this.indexService.sudoku();
  }

    @Get("/puzzles")
  puzzles(): string {
    return this.indexService.puzzles();
  }

  @Get("/tic_tac_toe")
  tic_tac_toe(): string {
    return this.indexService.tic_tac_toe();
  }

    @Get("/clock")
  clock(): string {
    return this.indexService.clock();
  }

  @Get("/hangman")
  hangman(): string {
    return this.indexService.hangman();
  }

  @Get("/virtual_keyboard")
  virtual_keyboard(): string {
    return this.indexService.virtual_keyboard();
  }


}
