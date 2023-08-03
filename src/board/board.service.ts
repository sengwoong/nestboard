import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import {v1 as uuid}from 'uuid'
import { CreateBoardDto } from './dto/create-board.dto';
import { find } from 'rxjs';
@Injectable()
export class BoardService {
    private boards:Board[] =[];


    getAllBoards():Board[]{
        return this.boards
    }

    createBoard(CreateBoardDto:CreateBoardDto){
        const {title ,description}=CreateBoardDto
        const board:Board={
            id:uuid(),
            title:title,
            description:description,
            status:BoardStatus.PUBLIC

        }

        console.log(board)
    this.boards.push(board)
    return board
    }

    


getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id); // 수정: 올바른 문법으로 find를 사용해야 합니다.
}
delectBoardById(id: string):void  {
     this.boards.find((board) => board.id !== id); // 수정: 올바른 문법으로 find를 사용해야 합니다.
}

updateBoardStatus(id:string ,status:BoardStatus):Board{
    const board =this.getBoardById(id)
    board.status =status
    return board
}



}
