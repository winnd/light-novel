import {InMemoryDbService} from 'angular-in-memory-web-api';

export class AutoCompleteData implements InMemoryDbService {
  createDb() {
    const options = [
      {title: '标题1', children: [{title: '内容1', content: '内容1-1'}]},
      {title: '标题2', children: [{title: '内容2', content: '内容2-1'}]},
      {title: '标题3', children: [{title: '内容3', content: '内容3-1'}]},
      {title: '标题4', children: [{title: '内容4', content: '内容4-1'}]},
      {title: '标题5', children: [{title: '内容5', content: '内容5-1'}]},
    ];
    return {options};
  }
}
