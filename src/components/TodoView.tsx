type Props = {
  title: string;
  onDelete: () => void;
};

export const TodoView: React.FC<Props> = ({ title, onDelete }) => (
  <>
    <span data-cy="TodoTitle" className="todo__title">
      {title}
    </span>

    <button
      type="button"
      className="todo__remove"
      data-cy="TodoDelete"
      onClick={onDelete}
    >
      ×
    </button>
  </>
);
