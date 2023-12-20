interface Task {
  id?: string;
  title:string;
  task_name: string;
  task_detail: string;
  date: String;
  published: boolean;
  user_id:string;
  audience_id:string;
}
export default Task;
