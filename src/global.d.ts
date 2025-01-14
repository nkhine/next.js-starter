// https://fettblog.eu/typescript-react-generic-forward-refs/
declare global {
  declare module 'react' {
    function forwardRef<T, P = Record<string, unknown>>(
      render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
  }
}
