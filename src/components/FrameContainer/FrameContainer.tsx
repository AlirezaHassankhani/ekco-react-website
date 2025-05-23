import './FrameContainer.css'
import type IProps from './type';

export default function FrameContainer({ children, title, icon }: IProps) {
  return (
    <section>
      <div className="frame-container p-3">
        <div className="frame-container__header pb-2 px-4">
          <i className={`${icon} me-2`}></i>
          <span className="ir">{title}</span>
        </div>

        <div className="frame-container__body">{children}</div>
      </div>
    </section>
  );
}