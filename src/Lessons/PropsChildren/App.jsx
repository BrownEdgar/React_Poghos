
import Child from './Child'

export default function App() {
  return (
    <div>
      <h1>Props children</h1>
      <Child size="xl" title="Componennt N on Size:lg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit omnis alias architecto culpa facilis inventore natus a laudantium voluptates at, commodi temporibus necessitatibus, eaque dignissimos esse quo delectus quos?</p>
      </Child>

      <Child size="lg">
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
      </Child>

      <Child size="md">

        <img src="https://images.unsplash.com/photo-1700686426826-913b0509c4bc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus ea consequuntur! Ad iste cumque quisquam praesentium tenetur cum quos aperiam error, aliquid nostrum corrupti nihil quae vel accusantium laborum.</p>
      </Child>
    </div>
  )
}
