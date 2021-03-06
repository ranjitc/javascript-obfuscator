export enum NodeTransformer {
    BlockStatementControlFlowTransformer = 'BlockStatementControlFlowTransformer',
    CommentsTransformer = 'CommentsTransformer',
    CustomCodeHelpersTransformer = 'CustomCodeHelpersTransformer',
    DeadCodeInjectionTransformer = 'DeadCodeInjectionTransformer',
    EvalCallExpressionTransformer = 'EvalCallExpressionTransformer',
    FunctionControlFlowTransformer = 'FunctionControlFlowTransformer',
    IfStatementSimplifyTransformer = 'IfStatementSimplifyTransformer',
    LabeledStatementTransformer = 'LabeledStatementTransformer',
    LiteralTransformer = 'LiteralTransformer',
    MemberExpressionTransformer = 'MemberExpressionTransformer',
    MetadataTransformer = 'MetadataTransformer',
    MethodDefinitionTransformer = 'MethodDefinitionTransformer',
    ObfuscatingGuardsTransformer = 'ObfuscatingGuardsTransformer',
    ObjectExpressionKeysTransformer = 'ObjectExpressionKeysTransformer',
    ObjectExpressionTransformer = 'ObjectExpressionTransformer',
    ParentificationTransformer = 'ParentificationTransformer',
    RenamePropertiesTransformer = 'RenamePropertiesTransformer',
    ScopeIdentifiersTransformer = 'ScopeIdentifiersTransformer',
    SplitStringTransformer = 'SplitStringTransformer',
    TemplateLiteralTransformer = 'TemplateLiteralTransformer',
    VariableDeclarationsMergeTransformer = 'VariableDeclarationsMergeTransformer',
    VariablePreserveTransformer = 'VariablePreserveTransformer'
}
