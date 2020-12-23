// / <reference types="react-scripts" />

type Todo = {
    text: string;
    completed: boolean;
    id: number;
};

type Status = 'all' | 'completed' | 'uncompleted';
