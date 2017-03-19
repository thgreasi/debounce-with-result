declare module "debounce-with-result" {
    export default function debounceWithResult<T> (func: () => T, wait?: Number, immediate?: boolean): () => Promise<T>
}
