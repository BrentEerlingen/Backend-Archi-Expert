import { Entity, model, property } from '@loopback/repository';

@model()
export class archiexpert extends Entity {

  @property({
    type: 'number',
    id: true,
    required: true,

  })
  id: number;

  @property({
    type: 'string',
    required: true,

  })
  question: string;

  @property({
    type: 'string',
    required: true,

  })
  awnserA: string;

  @property({
    type: 'string',
    required: true,

  })
  awnserB?: string;

  @property({
    type: 'string',
    required: true,

  })
  awnserC?: string;

  @property({
    type: 'string',
    required: true,

  })
  awnserD?: string;

  constructor(data?: Partial<archiexpert>) {
    super(data);
  }
}
