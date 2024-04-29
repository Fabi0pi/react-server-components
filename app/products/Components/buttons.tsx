import { deleteProduct } from "@/app/lib/api";


export function DeleteProduct({ id }: { id: number }) {
  const deleteItem = deleteProduct.bind(null, id)

  return (
    <form action={deleteItem}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
      </button>
    </form>
  );
}
