import { Cat } from '../entities/cat.entity';

export const catsRepository = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: Cat,
  },
]