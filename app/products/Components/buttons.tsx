import { deleteProduct } from "@/app/lib/actions";

export function DeleteProduct() {

  return (
    <form action={deleteProduct}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
      </button>
      <input name="id" type="text"></input>
    </form>
  );
}
