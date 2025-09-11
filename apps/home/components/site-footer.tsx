import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-700/10 bg-slate-900/10 dark:border-slate-700/50 dark:bg-slate-900/50 py-12 px-4">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <p className="text-sm text-foreground">© 2024 Miners Online. Open-source Minecraft server network.</p>
          <div className="flex items-center gap-4">
            <Link href="https://support.minersonline.uk" className="text-sm text-foreground hover:text-primary">
              Support
            </Link>
            <Link href="https://github.com/miners-online" className="text-sm text-foreground hover:text-primary">
              GitHub
            </Link>
            <Link href="https://github.com/orgs/miners-online/discussions" className="text-sm text-foreground hover:text-primary">
              Discuss
            </Link>
          </div>
        </div>
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-foreground text-center">
            NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
          </p>
        </div>
      </div>
    </footer>
  )
}
