interface SidebarGroupProps {
  children: React.ReactNode
}

export default function SidebarGroup({
  children,
}: SidebarGroupProps) {
  return (
    <div className="space-y-1">
      {children}
    </div>
  )
}