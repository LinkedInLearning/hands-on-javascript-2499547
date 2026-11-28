/** Guideline section label: a short solid bar followed by a SemiBold uppercase title. */
export default function Eyebrow({ children, className = '', as: Tag = 'p' }) {
  return <Tag className={`bar-title ${className}`}>{children}</Tag>;
}
