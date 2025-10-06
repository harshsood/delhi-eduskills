"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function LoginModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // autofocus when opened
  }, [open])

  async function submit(path: "/api/auth/login" | "/api/auth/register", e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setLoading(true)
    try {
      const res = await fetch(path, { method: "POST", body: fd })
      if (!res.ok) throw new Error("Auth failed")
      if (typeof window !== "undefined") localStorage.setItem("edAuth", "demo")
      toast({ title: "Success", description: "Signed in (demo)." })
      setOpen(false)
    } catch {
      toast({ title: "Error", description: "Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="hidden md:inline-flex">
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form className="space-y-3" onSubmit={(e) => submit("/api/auth/login", e)}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required placeholder="••••••••" />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Please wait..." : "Login"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form className="space-y-3" onSubmit={(e) => submit("/api/auth/register", e)}>
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email2">Email</Label>
                <Input id="email2" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password2">Password</Label>
                <Input id="password2" name="password" type="password" required placeholder="Create a password" />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Please wait..." : "Create account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
