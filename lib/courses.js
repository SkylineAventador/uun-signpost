import fs from 'fs'
import path from 'path'

const coursesDirectory = path.join(process.cwd(), 'courses')

export function getSortedCoursesData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(coursesDirectory)
    const allCoursesData = fileNames.map(fileName => {
        // Remove ".json" from file name to get id
        const id = fileName.replace(/\.json$/, '')

        // Read markdown file as string
        const fullPath = path.join(coursesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const course = JSON.parse(fileContents)

        // Combine the data with the id
        return {
            id,
            ...course.data
        }
    })
    // Sort posts by date
    return allCoursesData.sort((a, b) => {
        if (a.name < b.name) {
            return 1
        } else {
            return -1
        }
    })
}
