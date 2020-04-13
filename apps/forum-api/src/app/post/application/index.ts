import { CreatePostCommandHandler } from '@forum-api/post/application/create/create-post-command.handler';
import { FindPostQueryHandler } from '@forum-api/post/application/find/find-post-query.handler';
import { FindAllPostsQueryHandler } from '@forum-api/post/application/findAll/find-all-posts-query.handler';
import { PostCreator } from '@forum-api/post/application/create/post-creator';
import { PostFinder } from '@forum-api/post/application/find/post-finder';
import { PostFinderAll } from '@forum-api/post/application/findAll/post-finder-all';

export const APPLICATION_SERVICES = [ PostCreator, PostFinder, PostFinderAll ];
export const COMMAND_HANDLERS = [ CreatePostCommandHandler ];
export const QUERY_HANDLERS = [ FindPostQueryHandler, FindAllPostsQueryHandler ];
