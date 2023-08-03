import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {}

    @Get()
    getAllBoard():Board[] {
        return this.boardService.getAllBoards();
    }



//     @Post()
//     createBoard(
//         @Body('title') title:string, 
//         @Body('description') description:string,
//         ):Board{
// console.log(title,description)

// return this.boardService.createBoard(title,description)
//     }


    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() CreateBoardDto:CreateBoardDto
        ):Board{
console.log(CreateBoardDto)

return this.boardService.createBoard(CreateBoardDto)
    }

    //getBoardBtId(@Param()params):Board{
        //여래개가져올떈
    //localhost:5000?id=aaa
    @Get('/:id')
    getBoardBtId(@Param('id')id):Board{
        return this.boardService.getBoardById(id)
    }

    @Delete('/:id')
    deleteBoard(@Param('id')id:string):void{
        this.boardService.delectBoardById(id)
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id:string,
        @Body('status',BoardStatusValidationPipe) status:BoardStatus
    ){
        return this.boardService.updateBoardStatus(id,status)
    }
    
}

