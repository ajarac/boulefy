import { Body, Request, Controller, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import { AuthGuard } from '@api/shared/infrastructure/guards/auth.guard'
import { CreateGroupCommand } from '@api/group/application/create/create-group-command'

@Controller('groups')
export class CreateGroupController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    @UseGuards(AuthGuard)
    create(@Param('id') id: string, @Body() { name, description }: RequestBody, @Request() request): void {
        const userId: string = request.user.id
        const command: CreateGroupCommand = new CreateGroupCommand({ id, name, description, userId })
        this.commandBus.execute(command)
    }
}

interface RequestBody {
    name: string
    description: string
}
