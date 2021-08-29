import fs from 'fs'
import path from 'path'

const coursesDirectory = path.join(process.cwd(), 'courses')

export function getSortedCoursesData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(coursesDirectory)
    const allCoursesData = fileNames.map(fileName => {
        // Remove ".json" from file name to get id
        const id = fileName.replace(/\.json$/, '')

        const fullPath = path.join(coursesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const courses = JSON.parse(fileContents)

        // Combine the data with the id
        return {
            ...courses.data
        }
    })
    // Sort posts by name
    return allCoursesData.sort((a, b) => {
        if (a.courses.courses.name < b.courses.courses.name) {
            return 1
        } else {
            return -1
        }
    })
}

export function getCoursesData(){
  const fileName = '1_winter.json';
  const fullPath = path.join(coursesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const coursesData = JSON.parse(fileContents);

  return {
    coursesData
  }
}

export function getAllCoursesIds() {
    const fileNames = fs.readdirSync(coursesDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.json$/, '')
            }
        }
    })
}

export async function getCourseData(id) {
    const fullPath = path.join(coursesDirectory, '1_winter.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const jsonData = JSON.parse(fileContents)

    return {
        id,
        ...jsonData.data
    }
}
