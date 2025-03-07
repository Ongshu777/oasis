import { Authorized, Ctx, Query, Resolver } from 'type-graphql';
import { ContextType } from '@root/apolloServer';
import User from '@entities/User';

@Resolver()
export class CurrentUser {
  @Query(() => User, { nullable: true })
  @Authorized()
  currentUser(@Ctx() { getUser }: ContextType) {
    return getUser();
  }
}
