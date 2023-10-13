import {BuildOptions} from 'esbuild';

export interface PluginOptions
  extends Exclude<BuildOptions, 'entryPoints' | 'outfile' | 'outdir'> {
  workerOptions?: WorkerOptions;

  /**
   * @deprecated Use `workerOptions.name` instead.
   */
  workerName?: string;
}

export default function inlineWorkerPlugin(buildConfig?: PluginOptions): {
  name: 'esbuild-plugin-inline-worker';
  setup: (build: unknown) => void;
};
