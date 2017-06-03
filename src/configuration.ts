'use strict';
import { Commands } from './commands';
import { OutputLevel } from './logger';

export { ExtensionKey } from './constants';

export type BlameLineHighlightLocations = 'gutter' | 'line' | 'overviewRuler';
export const BlameLineHighlightLocations = {
    Gutter: 'gutter' as BlameLineHighlightLocations,
    Line: 'line' as BlameLineHighlightLocations,
    OverviewRuler: 'overviewRuler' as BlameLineHighlightLocations
};

export type CodeLensCommand = 'gitlens.toggleFileBlame' | 'gitlens.showBlameHistory' | 'gitlens.showFileHistory' | 'gitlens.diffWithPrevious' | 'gitlens.showQuickCommitDetails' | 'gitlens.showQuickCommitFileDetails' | 'gitlens.showQuickFileHistory' | 'gitlens.showQuickRepoHistory';
export const CodeLensCommand = {
    BlameAnnotate: Commands.ToggleFileBlame as CodeLensCommand,
    ShowBlameHistory: Commands.ShowBlameHistory as CodeLensCommand,
    ShowFileHistory: Commands.ShowFileHistory as CodeLensCommand,
    DiffWithPrevious: Commands.DiffWithPrevious as CodeLensCommand,
    ShowQuickCommitDetails: Commands.ShowQuickCommitDetails as CodeLensCommand,
    ShowQuickCommitFileDetails: Commands.ShowQuickCommitFileDetails as CodeLensCommand,
    ShowQuickFileHistory: Commands.ShowQuickFileHistory as CodeLensCommand,
    ShowQuickCurrentBranchHistory: Commands.ShowQuickCurrentBranchHistory as CodeLensCommand
};

export type CodeLensLocations = 'document' | 'containers' | 'blocks' | 'custom';
export const CodeLensLocations = {
    Document: 'document' as CodeLensLocations,
    Containers: 'containers' as CodeLensLocations,
    Blocks: 'blocks' as CodeLensLocations,
    Custom: 'custom' as CodeLensLocations
};

export type FileAnnotationType = 'gutter' | 'hover';
export const FileAnnotationType = {
    Gutter: 'gutter' as FileAnnotationType,
    Hover: 'hover' as FileAnnotationType
};

export type LineAnnotationType = 'trailing' | 'hover';
export const LineAnnotationType = {
    Trailing: 'trailing' as LineAnnotationType,
    Hover: 'hover' as LineAnnotationType
};

export type StatusBarCommand = 'gitlens.toggleFileBlame' | 'gitlens.showBlameHistory' | 'gitlens.showFileHistory' | 'gitlens.toggleCodeLens' | 'gitlens.diffWithPrevious' | 'gitlens.diffWithWorking' | 'gitlens.showQuickCommitDetails' | 'gitlens.showQuickCommitFileDetails' | 'gitlens.showQuickFileHistory' | 'gitlens.showQuickRepoHistory';
export const StatusBarCommand = {
    BlameAnnotate: Commands.ToggleFileBlame as StatusBarCommand,
    ShowBlameHistory: Commands.ShowBlameHistory as StatusBarCommand,
    ShowFileHistory: Commands.ShowFileHistory as CodeLensCommand,
    DiffWithPrevious: Commands.DiffWithPrevious as StatusBarCommand,
    DiffWithWorking: Commands.DiffWithWorking as StatusBarCommand,
    ToggleCodeLens: Commands.ToggleCodeLens as StatusBarCommand,
    ShowQuickCommitDetails: Commands.ShowQuickCommitDetails as StatusBarCommand,
    ShowQuickCommitFileDetails: Commands.ShowQuickCommitFileDetails as StatusBarCommand,
    ShowQuickFileHistory: Commands.ShowQuickFileHistory as StatusBarCommand,
    ShowQuickCurrentBranchHistory: Commands.ShowQuickCurrentBranchHistory as StatusBarCommand
};

export interface IAdvancedConfig {
    caching: {
        enabled: boolean;
        maxLines: number;
    };
    git: string;
    gitignore: {
        enabled: boolean;
    };
    maxQuickHistory: number;
    menus: {
        explorerContext: {
            fileDiff: boolean;
            history: boolean;
            remote: boolean;
        };
        editorContext: {
            blame: boolean;
            copy: boolean;
            details: boolean;
            fileDiff: boolean;
            history: boolean;
            lineDiff: boolean;
            remote: boolean;
        };
        editorTitle: {
            blame: boolean;
            fileDiff: boolean;
            history: boolean;
            status: boolean;
        };
        editorTitleContext: {
            blame: boolean;
            fileDiff: boolean;
            history: boolean;
            remote: boolean;
        };
    };
    quickPick: {
        closeOnFocusOut: boolean;
    };
    toggleWhitespace: {
        enabled: boolean;
    };
}

export interface ICodeLensLanguageLocation {
    language: string | undefined;
    locations: CodeLensLocations[];
    customSymbols?: string[];
}

export interface IThemeConfig {
    annotations: {
        file: {
            gutter: {
                separateLines: boolean;
                dark: {
                    backgroundColor: string | null;
                    foregroundColor: string;
                    uncommittedForegroundColor: string | null;
                };
                light: {
                    backgroundColor: string | null;
                    foregroundColor: string;
                    uncommittedForegroundColor: string | null;
                };
            };

            hover: {
                separateLines: boolean;
            };
        };

        line: {
            trailing: {
                dark: {
                    backgroundColor: string | null;
                    foregroundColor: string;
                };
                light: {
                    backgroundColor: string | null;
                    foregroundColor: string;
                };
            };
        };
    };

    lineHighlight: {
        dark: {
            backgroundColor: string;
            overviewRulerColor: string;
        };
        light: {
            backgroundColor: string;
            overviewRulerColor: string;
        };
    };
}

export const themeDefaults: IThemeConfig = {
    annotations: {
        file: {
            gutter: {
                separateLines: true,
                dark: {
                    backgroundColor: null,
                    foregroundColor: 'rgb(190, 190, 190)',
                    uncommittedForegroundColor: null
                },
                light: {
                    backgroundColor: null,
                    foregroundColor: 'rgb(116, 116, 116)',
                    uncommittedForegroundColor: null
                }
            },
            hover: {
                separateLines: false
            }
        },
        line: {
            trailing: {
                dark: {
                    backgroundColor: null,
                    foregroundColor: 'rgba(153, 153, 153, 0.35)'
                },
                light: {
                    backgroundColor: null,
                    foregroundColor: 'rgba(153, 153, 153, 0.35)'
                }
            }
        }
    },
    lineHighlight: {
        dark: {
            backgroundColor: 'rgba(0, 188, 242, 0.2)',
            overviewRulerColor: 'rgba(0, 188, 242, 0.6)'
        },
        light: {
            backgroundColor: 'rgba(0, 188, 242, 0.2)',
            overviewRulerColor: 'rgba(0, 188, 242, 0.6)'
        }
    }
};

export interface IConfig {
    annotations: {
        file: {
            gutter: {
                format: string;
                dateFormat: string;
                compact: boolean;
                heatmap: {
                    enabled: boolean;
                    location: 'left' | 'right';
                };
                hover: {
                    details: boolean;
                    wholeLine: boolean;
                };
            };

            hover: {
                heatmap: {
                    enabled: boolean;
                };
                wholeLine: boolean;
            };
        };

        line: {
            hover: {
                details: boolean;
                changes: boolean;
            };

            trailing: {
                format: string;
                dateFormat: string;
                hover: {
                    changes: boolean;
                    details: boolean;
                    wholeLine: boolean;
                };
            };
        };
    };

    blame: {
        file: {
            annotationType: FileAnnotationType;
            lineHighlight: {
                enabled: boolean;
                locations: BlameLineHighlightLocations[];
            };
        };

        line: {
            enabled: boolean;
            annotationType: LineAnnotationType;
        };
    };

    codeLens: {
        enabled: boolean;
        recentChange: {
            enabled: boolean;
            command: CodeLensCommand;
        };
        authors: {
            enabled: boolean;
            command: CodeLensCommand;
        };
        locations: CodeLensLocations[];
        customLocationSymbols: string[];
        perLanguageLocations: ICodeLensLanguageLocation[];
        debug: boolean;
    };

    statusBar: {
        enabled: boolean;
        alignment: 'left' | 'right';
        command: StatusBarCommand;
        format: string;
        dateFormat: string;
    };

    theme: IThemeConfig;

    debug: boolean;
    insiders: boolean;
    outputLevel: OutputLevel;

    advanced: IAdvancedConfig;
}