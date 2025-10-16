export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">S.I. Digital Solutions</h3>
          <p className="text-primary-foreground/80 mb-4">Social Media & Talent Management Agency</p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} S.I. Digital Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
