import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class RabbitMqConnectionDetails {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rabbitmqUrl!: string;
}

export { RabbitMqConnectionDetails as RabbitMqConnectionDetails };