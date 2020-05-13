import fs from 'fs'
import path from 'path'

export function getFile(name: string): string {
    const filePath = path.join(`${__dirname}/static-files`, name)
    const fileContent = fs.readFileSync(filePath)
    return fileContent.toString()
}