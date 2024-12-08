import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

interface Project {
    name: string,
    source: string,
    buildCommand?: string,
    outputDirectory?: string    
}

interface ProjectsConfig {
    projects: Project[]
    outputDirectory: string
}

const config: ProjectsConfig = {
    projects: [
        {
            name: "blog",
            source: "../blog",
        } as Project,
        {
            name: "minecraft-server",
            source: "../docs/minecraft-server",
            buildCommand: "npm run docs:build",
            outputDirectory: ".vitepress/dist"
        } as Project,
    ],
    outputDirectory: "./publish_out"
};

// Ensure a directory exists, creating it if necessary
function ensureDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Copy a directory recursively
function copyDirectory(src: string, dest: string) {
    if (!fs.existsSync(src)) {
        console.error(`Source directory not found: ${src}`);
        return;
    }
    ensureDirectory(dest);
    fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDirectory(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}

// Run a shell command
function runCommand(command: string, cwd: string) {
    return new Promise<void>((resolve, reject) => {
        exec(command, { cwd }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error running command '${command}':\n${stderr}`);
                reject(error);
            } else {
                console.log(`Command output for '${command}':\n${stdout}`);
                resolve();
            }
        });
    });
}

// Main build process
async function buildProjects(config: ProjectsConfig) {
    console.log("Starting build process...");

    const { projects, outputDirectory } = config;
    ensureDirectory(outputDirectory);

    for (const project of projects) {
        console.log(`Processing ${project.name}...`);
        const projectDir = path.resolve(project.source);

        if (!fs.existsSync(projectDir)) {
            console.error(`Project directory not found: ${projectDir}`);
            continue;
        }

        // Install dependencies
        console.log(`Installing dependencies for ${project.name}...`);
        try {
            await runCommand('npm install', projectDir);
        } catch (error) {
            console.error(`Failed to install dependencies for ${project.name}. Skipping this project.`);
            continue;
        }

        // Run build command
        if (project.buildCommand != undefined && project.outputDirectory != undefined) {
            console.log(`Building ${project.name}...`);
            try {
                await runCommand(project.buildCommand, projectDir);
            } catch (error) {
                console.error(`Failed to build ${project.name}. Skipping this project.`);
                continue;
            }

            // Copy build output to the main output directory
            const buildOutput = path.join(projectDir, project.outputDirectory);
            const targetOutput = path.join(outputDirectory, project.name);

            console.log(`Copying ${project.name} build to ${targetOutput}...`);
            copyDirectory(buildOutput, targetOutput);
        }
    }

    console.log("Build process complete.");
}

// Execute the build process
buildProjects(config);
