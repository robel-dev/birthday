"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type BirthdayTheme = "starry" | "sakura"

interface BirthdayThemeContextType {
  theme: BirthdayTheme
  setTheme: (theme: BirthdayTheme) => void
  toggleTheme: () => void
}

const BirthdayThemeContext = createContext<BirthdayThemeContextType | undefined>(undefined)

export function BirthdayThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<BirthdayTheme>("starry")

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === "starry" ? "sakura" : "starry")
  }, [])

  return (
    <BirthdayThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div data-birthday-theme={theme} className="min-h-screen">
        {children}
      </div>
    </BirthdayThemeContext.Provider>
  )
}

export function useBirthdayTheme() {
  const context = useContext(BirthdayThemeContext)
  if (!context) {
    throw new Error("useBirthdayTheme must be used within a BirthdayThemeProvider")
  }
  return context
}
