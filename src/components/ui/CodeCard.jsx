import React, { useEffect, useState } from 'react'

const k = (t) => ({ t, c: 'text-[#c678dd]' }) // keyword
const v = (t) => ({ t, c: 'text-[#e5c07b]' }) // variabel
const p = (t) => ({ t, c: 'text-[#e06c75]' }) // properti
const s = (t) => ({ t, c: 'text-[#98c379]' }) // string
const o = (t) => ({ t, c: 'text-[#abb2bf]' }) // simbol

const lines = [
  [k('const '), v('developer'), o(' = {')],
  [o('  '), p('name'), o(': '), s('"Dennis Abizar"'), o(',')],
  [o('  '), p('role'), o(': '), s('"Fullstack Developer"'), o(',')],
  [o('  '), p('education'), o(': '), s('"S1 Teknik Informatika"'), o(',')],
  [o('  '), p('stack'), o(': ['), s('"React"'), o(', '), s('"Laravel"'), o(', '), s('"MySQL"'), o('],')],
  [o('  '), p('focus'), o(': '), s('"Web Development"'), o(',')],
  [o('  '), p('status'), o(': '), s('"Open to work"'), o(',')],
  [o('};')],
]

const total = lines.flat().reduce((n, seg) => n + seg.t.length, 0)

export default function CodeCard() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Lewati animasi jika pengguna memilih reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total)
      return
    }
    if (count >= total) return
    const id = setTimeout(() => setCount((c) => c + 1), 45)
    return () => clearTimeout(id)
  }, [count])

  let remaining = count

  return (
    <div className="flex h-full min-h-[300px] w-full flex-col overflow-hidden rounded-xl bg-[#1e2127] text-left shadow-md">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#282c34] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-gray-400">developer.js</span>
      </div>

      {/* Code */}
      <pre className="flex-1 overflow-x-auto p-4 font-mono text-[13px] leading-7 sm:text-sm md:text-[15px]">
        <code>
          {lines.map((line, i) => {
            const rendered = line.map((seg, j) => {
              const shown = seg.t.slice(0, Math.max(remaining, 0))
              remaining -= seg.t.length
              return (
                <span key={j} className={seg.c}>
                  {shown}
                </span>
              )
            })
            const lineActive = remaining < 0 && remaining + line.reduce((n, x) => n + x.t.length, 0) >= 0
            return (
              <div key={i} className="flex">
                <span className="mr-4 w-4 select-none text-right text-gray-600">{i + 1}</span>
                <span className="whitespace-pre">
                  {rendered}
                  {(lineActive || (count >= total && i === lines.length - 1)) && (
                    <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-gray-300" />
                  )}
                </span>
              </div>
            )
          })}
        </code>
      </pre>
    </div>
  )
}