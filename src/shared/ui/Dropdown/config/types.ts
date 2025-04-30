export type DropdownProps = {
  children: React.ReactElement
  label: string
  variant?: 'outline'
  ref?: React.RefObject<{ closeDropdown: () => void } | null>
}
