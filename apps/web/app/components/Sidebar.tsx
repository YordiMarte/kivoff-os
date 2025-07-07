import { Home, ListTodo, NotebookPen, Bot } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className='w-64 border-r border-gray-200 p-6 flex flex-col gap-10'>
            <div className='text-2xl font-bold'>Kivoff</div>

            <nav className='flex flex-col gap-4 text-gray-700'>
                <a href="/dashboard" className='flex items-center gap-2 hover:text-black'>
                    <Home size={20} /> Inicio
                </a>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <ListTodo size={20} /> Tareas
                </a>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <ListTodo size={20} /> Tareas
                </a>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <NotebookPen size={20} /> Notas
                </a>
                <a href="#" className='flex items-center gap-2 hover:text-black'>
                    <Bot size={20} /> AI
                </a>
            </nav>
        </aside>
    )
}